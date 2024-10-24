import React from 'react';
import Head from 'next/head';
import * as THREE from "three";
import Header from '../components/header/Header';

interface Skill {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: Skill[];
}

export async function getStaticProps() {
  const skills: Skill[] = [
    {
      category: 'Programming Languages',
      items: ['PHP', 'JavaScript', 'Python', 'SQL', 'TypeScript'],
    },
    {
      category: 'Backend',
      items: ['RESTful API', 'Redis', 'Nginx', 'MariaDB, Postgres, SQLite, MongoDB', 'OAuth, JWT', 'Elasticsearch', 'Grafana'],
    },
    {
      category: 'Frameworks',
      items: ['Laravel', 'Yii', 'Pandas', 'Express.js', 'jQuery/Ajax', 'Tailwind', 'Bootstrap', 'Vue', 'React', 'Flutter'],
    },
    {
      category: 'Other Skills',
      items: ['UI/UX Design (Figma)', 'Cloud Computing (AWS)', 'Containerization (Docker)', 'Automated Testing (Selenium)', 'Source Control (Github)', 'System Administration (Linux)', 'Networking (Mikrotik)', 'Digital Marketing (SEO)'],
    },
  ];

  return {
    props: { skills },
  };
}

class Skills extends React.Component<SkillsProps> { 
  componentDidMount() {
    const container: HTMLElement | null = document.getElementById('skill-canvas-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container?.appendChild(renderer.domElement);

    // Create a particles system
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({ color: 0x8888ff, size: 0.05 });

    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    function animate() {
      requestAnimationFrame(animate);
      // Add some rotation to the particles
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
  }

  render() {
    const { skills } = this.props;
    
    return (
      <>
        <Head>
          <title>My Skills - Samsul Hadi</title>
          <meta name="description" content="Daftar keterampilan dan keahlian saya di bidang teknologi informasi dan pengembangan perangkat lunak." />
          <meta name="keywords" content="programming, PHP, JavaScript, Python, Laravel, React, skills" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <main className='flex items-center justify-center w-[100vw] h-[100vh] top-0 left-0 p-4'>
          <div className='max-w-[800px] h-full overflow-auto pt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 card'>
              {skills.map((skill: Skill, index: number) => (
                <div key={index} className='bg-gray-800 p-6 rounded-lg'>
                  <div className='text-white text-xl font-semibold mb-4'>{skill.category}</div>
                  <ul className='text-white list-disc list-inside'>
                    {skill.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
        <div id='skill-canvas-container' className='absolute w-full h-full top-0 left-0' style={{ zIndex: '-100' }}></div>
      </>
    );
  }
}

export default Skills;
