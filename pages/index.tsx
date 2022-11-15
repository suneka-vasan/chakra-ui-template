import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from "../components/common/Meta"
import Header from "../components/common/Header"
import BannerSection from '../components/home/BannerSection'
import AboutSection from '../components/home/AboutSection'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <BannerSection />
      <AboutSection />

    </>
  )
}
