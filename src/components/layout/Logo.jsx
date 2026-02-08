import ImageSequence from '../ui/ImageSequence';

export default function Logo({ className = "h-12 w-32" }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <ImageSequence
                folderPath="/assets/animations/hero"
                frameCount={82}
                fileNamePrefix="frame_"
                className="w-full h-full object-contain"
            />
        </div>
    );
}
