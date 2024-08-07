import React from 'react';
import Head from 'next/head';
import * as THREE from 'three';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Header from '../components/header/Header';

class Education extends React.Component<{}> {
    componentDidMount() {
        let container;
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        let renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container = document.getElementById('education-canvas-container');
        container?.appendChild(renderer.domElement);

        let particlesCount = 5000;
        let particlesGeometry = new THREE.BufferGeometry();
        let particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true
        });

        let positions = new Float32Array(particlesCount * 3);
        let scales = new Float32Array(particlesCount);
        let colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            let distance = Math.random() * 100 - 50;
            let angle = Math.random() * Math.PI * 2;

            positions[i * 3] = distance * Math.cos(angle);
            positions[i * 3 + 1] = distance * Math.sin(angle);
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

            scales[i] = Math.random();

            colors[i * 3] = 0.5 + 0.5 * Math.cos(angle);
            colors[i * 3 + 1] = 0.5 + 0.5 * Math.sin(angle);
            colors[i * 3 + 2] = 0.5 + 0.5 * Math.sin(angle);
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        let particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        function animate() {
            requestAnimationFrame(animate);

            particles.rotation.x += 0.001;
            particles.rotation.y += 0.001;

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
                    <title>My Educations - Samsul Hadi</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className='flex items-center justify-center w-screen h-screen cursor-default p-4 mt-5'>
                    <div className="w-full max-w-2xl p-4 border border-slate-400 rounded-lg outline">
                        <div className="text-lg font-bold mb-4 text-white">Education</div>
                        <div className="timeline">
                            <div className="timeline-item rounded-lg">
                                <div className="timeline-icon-polindra">
                                    <Image src={'/assets/img/polindra_college.png'} alt="Indramayu Polytechnic" width={40} height={40} className="rounded-full" />
                                </div>
                                <div className="timeline-content rounded-lg">
                                    <div className="text-lg font-semibold text-white flex items-center">Bachelor Degree (Informatic Engineering Major)</div>
                                    <div className="text-sm text-gray-400 mt-1 flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-l" /> Indramayu Polytechnic, Loh Bener, Indramayu Regency.
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1 flex items-center">
                                        <FaCalendarAlt className="mr-2 text-l" /> 2016 - 2019
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item rounded-lg">
                                <div className="timeline-icon-smkn2">
                                    <Image src={'/assets/img/smkn2tangsel.png'} alt="State Vocational High School 2" width={40} height={40} className="rounded-full" />
                                </div>
                                <div className="timeline-content rounded-lg">
                                    <div className="text-lg font-semibold text-white flex items-center">Diploma (Multimedia Major)</div>
                                    <div className="text-sm text-gray-400 mt-1 flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-l" /> State Vocational High School 2, Pondok Aren, Tangerang Selatan City
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1 flex items-center">
                                        <FaCalendarAlt className="mr-2 text-l" /> 2013 - 2016
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div id='education-canvas-container' className='absolute w-full h-full top-0 left-0' style={{ zIndex: '-100' }}></div>
                <Header />
                <style jsx>{`
                    .timeline {
                        position: relative;
                        list-style: none;
                    }
                    .timeline::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 50%;
                        margin-left: -1px;
                        width: 2px;
                        height: 70%;
                        background: #ccc;
                    }
                    .timeline-item {
                        position: relative;
                        margin: 0 0 2em 0;
                        padding-left: 50%;
                        clear: both;
                    }
                    .timeline-item:nth-child(odd) {
                        padding-left: 0;
                        padding-right: 50%;
                    }
                    .timeline-item::before,
                    .timeline-item::after {
                        content: "";
                        display: table;
                    }
                    .timeline-item::after {
                        clear: both;
                    }
                    .timeline-item .timeline-icon-polindra {
                        position: absolute;
                        top: 0;
                        left: 53.5%;
                        margin-left: -25px; /* Adjusted for larger icon size */
                        width: 50px;
                        height: 50px;
                        background: #fff;
                        border-radius: 50%;
                        box-shadow: 0 0 0 3px #ff5722;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .timeline-item .timeline-icon-smkn2 {
                        position: absolute;
                        top: 0;
                        left: 47%;
                        margin-left: -25px; /* Adjusted for larger icon size */
                        width: 50px;
                        height: 50px;
                        background: #fff;
                        border-radius: 50%;
                        box-shadow: 0 0 0 3px #ff5722;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .timeline-item .timeline-content {
                        position: relative;
                        top: -12px;
                        background: #333;
                        padding: 1em;
                        border-radius: 4px;
                        color: #fff;
                        border: 1px solid #ff5722;
                    }
                    .timeline-item:nth-child(odd) .timeline-content {
                        float: right;
                    }
                    .timeline-item:nth-child(even) .timeline-content {
                        float: left;
                    }
                `}</style>
            </>
        );
    }
}

export default Education;
