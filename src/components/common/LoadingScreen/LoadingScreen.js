import Head from "next/head";
import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>

      <div
        id="no-cursor"
        className="w-[100vw] fixed bg-[black] z-[500] px-[24px] lg:px-[48px] flex flex-col gap-1 justify-center items-center h-[100vh]"
      >
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
