import React from 'react';
import Head from 'next/head'
import * as THREE from "three";

import Header from '../components/header/Header';

class Skills extends React.Component<{}> { 
  componentDidMount() {
    let container: any;
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container = document.getElementById('skill-canvas-container');
    container.appendChild(renderer.domElement);

    // Create a particles system
    let particlesCount = 1000;
    let particlesGeometry = new THREE.BufferGeometry();
    let particlesMaterial = new THREE.PointsMaterial({ color: 0x8888ff, size: 0.05 });

    let positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    let particles = new THREE.Points(particlesGeometry, particlesMaterial);
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
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
  }

  render(){
    return (
      <>
        <Head>
          <title>My Skills - Samsul Hadi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <main className='flex items-center justify-center w-[100vw] h-[100vh] top-0 left-0 p-4'>
          <div className='max-w-[800px] h-full overflow-auto pt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 card'>
              <div className='bg-gray-800 p-6 rounded-lg'>
                <div className='text-white text-xl font-semibold mb-4'>Programming Languages</div>
                <ul className='text-white list-disc list-inside'>
                  <li>PHP</li>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className='bg-gray-800 p-6 rounded-lg'>
                <div className='text-white text-xl font-semibold mb-4'>Backend</div>
                <ul className='text-white list-disc list-inside'>
                  <li>RESTful API</li>
                  <li>Redis</li>
                  <li>Nginx</li>
                  <li>MariaDB</li>
                  <li>Mysql</li>
                  <li>Postgres</li>
                </ul>
              </div>
              <div className='bg-gray-800 p-6 rounded-lg'>
                <div className='text-white text-xl font-semibold mb-4'>Frameworks</div>
                <ul className='text-white list-disc list-inside'>
                  <li>Laravel</li>
                  <li>Yii</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Jquery</li>
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                  <li>Vue</li>
                  <li>React</li>
                  <li>Flutter</li>
                </ul>
              </div>
              <div className='bg-gray-800 p-6 rounded-lg'>
                <div className='text-white text-xl font-semibold mb-4'>Other Skills</div>
                <ul className='text-white list-disc list-inside'>
                  <li>UI/UX Design (Figma)</li>
                  <li>Cloud Computing (AWS)</li>
                  <li>Containerization (Docker)</li>
                  <li>Automated Testing (Selenium)</li>
                  <li>Source Control (Github)</li>
                  <li>System Administration (Linux)</li>
                  <li>Networking (Mikrotik)</li>
                  <li>Digital Marketing (SEO)</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div id='skill-canvas-container' className='absolute w-full h-full top-0 left-0' style={{zIndex:'-100'}}></div>
      </>
    );
  }
}

export default Skills;
