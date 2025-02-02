import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import SignupComponent from "@/components/layout/signup.component";
import Mainpage from "@/components/landing.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const LoginComponent= dynamic(() => import ('../components/login.component'), { ssr: false })
const Header = dynamic(() => import('../components/header.component'))
const LayoutComponent = dynamic(() => import('../components/layout'))
const SignUpCmp = dynamic(() => import ('../components/layout/signup.component'))
const MainComponent = dynamic(() => import('../components/landing.component'))

  return (
    <>
        <div className='d-flex justify-content-center align-items-center pt-5'><MainComponent /></div>

      
    </>
  );
}
