import ImageSequence from '../ui/ImageSequence';

export default function Logo({ className = "h-12 w-48" }) {
    // Increased width w-48 to allow the 1920x1080 frames to fit without cropping.
    // The className prop allows parent to override, but defaults are safer now.
    return (
        <div className={`relative flex items-center ${className}`}>
            <ImageSequence
                folderPath="/assets/animations/hero"
                frameCount={82}
                fileNamePrefix="frame_"
                className="w-full h-full object-contain"
                mode="contain"
            />
        </div>
    );
}
