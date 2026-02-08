import { useEffect, useRef, useState } from 'react';

export default function ImageSequence({
    folderPath,
    frameCount,
    fileNamePrefix = 'frame_',
    className,
    onLoadComplete // Optional callback when all images are loaded
}) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);

    // Preload Images
    useEffect(() => {
        const loadedImages = [];
        let loadTracker = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            // Ensure 3-digit padding: 0 -> 000, 10 -> 010
            const paddedIndex = String(i).padStart(3, '0');
            img.src = `${folderPath}/${fileNamePrefix}${paddedIndex}.jpg`;

            img.onload = () => {
                loadTracker++;
                setLoadedCount(prev => prev + 1);
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, [folderPath, frameCount, fileNamePrefix]);

    // Notify parent when loading is done
    useEffect(() => {
        if (loadedCount === frameCount && onLoadComplete) {
            onLoadComplete();
        }
    }, [loadedCount, frameCount, onLoadComplete]);

    // Animation Loop - Simple Auto-Play for "Morph" effect
    useEffect(() => {
        if (loadedCount < frameCount) return;

        let animationFrameId;
        let frameIndex = 0;
        let lastTime = 0;
        const fps = 30; // Control speed here
        const interval = 1000 / fps;

        const render = (currentTime) => {
            animationFrameId = requestAnimationFrame(render);

            const deltaTime = currentTime - lastTime;

            if (deltaTime > interval) {
                lastTime = currentTime - (deltaTime % interval);

                const canvas = canvasRef.current;
                if (!canvas) return;

                const ctx = canvas.getContext('2d');
                const img = images[frameIndex];

                if (img) {
                    // Maintain aspect ratio cover
                    const canvasAspect = canvas.width / canvas.height;
                    const imgAspect = img.width / img.height;

                    let renderW, renderH, offsetX, offsetY;

                    if (canvasAspect > imgAspect) {
                        renderW = canvas.width;
                        renderH = canvas.width / imgAspect;
                        offsetX = 0;
                        offsetY = (canvas.height - renderH) / 2;
                    } else {
                        renderW = canvas.height * imgAspect;
                        renderH = canvas.height;
                        offsetX = (canvas.width - renderW) / 2;
                        offsetY = 0;
                    }

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
                }

                // Loop logic: Ping-pong or Loop?
                // For the "Morph" gif, a loop usually works best.
                frameIndex = (frameIndex + 1) % frameCount;
            }
        };

        animationFrameId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationFrameId);
    }, [loadedCount, frameCount, images]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`block w-full h-full object-cover ${className}`}
        />
    );
}
