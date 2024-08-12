'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
useEffect(()=>{
  const eventSource = new EventSource('https://text-streaming-next-js.vercel.app');
  //http://localhost:3000/api

  eventSource.onmessage = (event) => {
    setData(prev=>`${prev} ${event.data}`)
    console.log(`Received event: ${event.data}`);
  };
  
  eventSource.onerror = () => {
    console.log('Error occurred');
  };
  
  eventSource.onopen = () => {
    console.log('Connected to event stream');
  };
  return () => {
    eventSource.close();
  };
},[])
  const[data,setData]=useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
{data}
    </main>
  );
}
