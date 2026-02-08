export default function FeatureStrip({
    number,
    title,
    description,
    align = 'left'
}) {
    return (
        <div className="group relative border-b border-brand-dark-tide bg-brand-black transition-colors duration-500 hover:bg-brand-dark-tide/20 py-12 md:py-24 overflow-hidden">

            {/* Background Gradient Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-tahiti/0 via-brand-tahiti/5 to-brand-tahiti/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className={`container mx-auto px-6 flex flex-col md:flex-row items-start md:items-center ${align === 'right' ? 'md:justify-end' : 'md:justify-between'}`}>

                {/* Mobile Number/Title Stack */}
                <div className={`flex flex-col md:flex-row md:items-baseline md:space-x-8 ${align === 'right' ? 'md:order-2' : ''} z-10`}>
                    <span className="font-mono text-brand-tahiti text-xl mb-2 md:mb-0">{number}</span>
                    <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-brand-white group-hover:text-brand-pink transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <div className={`mt-6 md:mt-0 max-w-lg z-10 ${align === 'right' ? 'md:mr-auto md:order-1 md:text-right md:pr-12' : 'md:ml-auto md:text-left md:pl-12'}`}>
                    <p className="font-mono text-brand-silver/80 group-hover:text-brand-white transition-colors duration-300 leading-relaxed border-l-2 md:border-l-0 md:border-l-2 border-brand-tahiti/50 pl-4">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}
