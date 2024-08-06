import React from 'react';
import Head from 'next/head';
import * as THREE from "three";
import Image from "next/image";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

import Header from '../components/header/Header';

class Experiences extends React.Component {
  componentDidMount() {
    let container;
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container = document.getElementById('experience-canvas-container');
    container.appendChild(renderer.domElement);

    let particlesCount = 1000;
    let particlesGeometry = new THREE.BufferGeometry();
    let particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true
    });

    let positions = new Float32Array(particlesCount * 3);
    let scales = new Float32Array(particlesCount);
    let colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      let theta = Math.random() * 2 * Math.PI;
      let phi = Math.acos(2 * Math.random() - 1);
      let radius = Math.random() * 5;

      let x = radius * Math.sin(phi) * Math.cos(theta);
      let y = radius * Math.sin(phi) * Math.sin(theta);
      let z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      scales[i] = Math.random();

      colors[i * 3] = Math.random(); // Red
      colors[i * 3 + 1] = Math.random(); // Green
      colors[i * 3 + 2] = Math.random(); // Blue
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    let particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    function animate() {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      for (let i = 0; i < particlesCount; i++) {
        scales[i] = 0.5 + Math.sin(Date.now() * 0.001 + i * 0.01) * 0.5;
      }
      particlesGeometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
  }

  render() {
    return (
      <>
        <Head>
          <title>My Experiences - Samsul Hadi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className='flex items-center justify-center w-screen h-screen cursor-default p-4 mt-5'>
          <div className="rounded-xl bg-gradient shadow-xl overflow-hidden w-full max-w-2xl p-4">
            <div className="text-lg font-bold mb-4 text-white">Experience</div>
            <div className="relative border-l border-gray-700 ml-6">
              <div className="mb-8 pl-10 relative">
                <span className="absolute left-[-9px] top-1 w-4 h-4 bg-gray-600 rounded-full"></span>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-14 bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image src={'/assets/img/aidan_company.jpeg'} alt="Aidan" width={100} height={100} className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white flex items-center">
                        <FaBriefcase className="mr-2 text-l" /> Software Engineer
                      </div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-l" /> Aidan Technologies Sdn Bhd, Setapak, Wilayah Persekutuan
                      </div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center">
                        <FaCalendarAlt className="mr-2 text-l" /> Januari 2022 - Present
                      </div>
                      <ul className="text-sm text-gray-300 mt-2 list-disc list-inside">
                        <li>Assist on portal and system development.</li>
                        <li>Maintaining current and previous project.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 pl-10 relative">
                <span className="absolute left-[-9px] top-1 w-4 h-4 bg-gray-600 rounded-full"></span>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-14 bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image src={'/assets/img/holycow_company.jpg'} alt="Holycow" width={100} height={100} className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white flex items-center">
                        <FaBriefcase className="mr-2 text-l" /> IT Staff
                      </div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-l" /> Bhadranaya Group Indonesia, Bintaro, Jakarta Selatan City.
                      </div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center">
                        <FaCalendarAlt className="mr-2 text-l" /> Dec 2020 - Januari 2022
                      </div>
                      <ul className="text-sm text-gray-300 mt-2 list-disc list-inside">
                        <li>Built Apps - ERP System</li>
                        <li>Installation Networking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 pl-10 relative">
                <span className="absolute left-[-9px] top-1 w-4 h-4 bg-gray-600 rounded-full"></span>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-14 bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image src={'/assets/img/codify_company.jpeg'} alt="Codify" width={100} height={100} className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white flex items-center">
                        <FaBriefcase className="mr-2 text-l" /> Backend Developer
                      </div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-l" /> Kreasi Digital Indonesia, Gading Serpong, Tangerang City
                      </div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center">
                        <FaCalendarAlt className="mr-2 text-l" /> Feb 2020 - May 2020
                      </div>
                      <ul className="text-sm text-gray-300 mt-2 list-disc list-inside">
                        <li>Develop Web and Mobile For Transportation Apps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div id='experience-canvas-container' className='absolute w-full h-full top-0 left-0' style={{ zIndex: '-100' }}></div>
        <Header />
      </>
    )
  }
}

export default Experiences;
