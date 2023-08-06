"use client";

import { useState } from "react";
import { uploadFile } from "./actions";

export default function Home() {
  const [file, setFile] = useState<any>();

  return (
    <div className='flex h-screen w-screen bg-zinc-900'>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const fd = new FormData(e.target as HTMLFormElement);
          const uploadedFile = await uploadFile(fd); // type says that is not an array
          setFile(uploadedFile);
          alert(`Uploaded file`);
        }}
        className='flex flex-col h-full justify-center items-center w-full gap-8'>
        <input
          name='file'
          type='file'
          multiple={false}
          className='cursor-pointer bg-white text-black rounded border p-2 text-sm font-medium file:cursor-pointer file:border-0 file:bg-white file:text-sm file:font-semibold'
        />
        <button
          type='submit'
          className='inline-flex text-white items-center justify-center rounded bg-red-500 p-2 font-semibold hover:bg-red-600'>
          Upload Files
        </button>
        {file && (
          <div className='flex flex-col px-8'>
            <span className='text-center font-bold'>DO NOT EXPECT AN ARRAY:</span>
            <span>{JSON.stringify(file, null, 2)}</span>
          </div>
        )}
      </form>
    </div>
  );
}
