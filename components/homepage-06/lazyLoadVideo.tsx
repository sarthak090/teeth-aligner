import React, { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import clsx from 'clsx';

const LazyLoadVideo = ({ src, className }: { src: string, className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef);

  return (
    <video ref={videoRef} src={isVideoInView ? src : undefined} autoPlay muted loop className={clsx('w-full object-contain rounded-lg', className ?? '')} />
  );
};  

export default LazyLoadVideo;