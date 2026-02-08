import FeatureStrip from '../ui/FeatureStrip';

export default function System() {
    const features = [
        {
            number: '01',
            title: 'STRATEGIC BLUEPRINTS',
            description: 'Tailored community roadmaps that align growth, engagement, and brand identity into a single cohesive strategy.',
            align: 'left'
        },
        {
            number: '02',
            title: 'ENGAGEMENT ARCHITECTURE',
            description: 'Custom-built systems and experiences designed to turn passive audiences into active, passionate participants.',
            align: 'right'
        },
        {
            number: '03',
            title: 'INTELLIGENCE & ANALYTICS',
            description: 'Data-driven insights that reveal what\'s working, what\'s not, and where the biggest opportunities live.',
            align: 'left'
        },
        {
            number: '04',
            title: 'SCALABLE INFRASTRUCTURE',
            description: 'Secure, organized, and beautifully designed spaces built to grow with your brand and your audience.',
            align: 'right'
        }
    ];

    return (
        <section id="approach" className="bg-brand-black w-full relative z-10">
            <div className="border-t border-brand-dark-tide">
                {features.map((feature, index) => (
                    <FeatureStrip
                        key={index}
                        number={feature.number}
                        title={feature.title}
                        description={feature.description}
                        align={feature.align}
                    />
                ))}
            </div>
        </section>
    );
}
