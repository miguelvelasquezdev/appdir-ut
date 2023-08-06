'use server';

import { utapi } from "uploadthing/server";

export async function uploadFile(fd: FormData) {
  const file = fd.get("file") as File;
  const uploadedFile = await utapi.uploadFiles(file);
  return uploadedFile;
}

export async function uploadFromUrl(fd: FormData) {
  const url = fd.get("url") as string;
  const uploadedFile = await utapi.uploadFilesFromUrl(url);
  return uploadedFile.data;
}
