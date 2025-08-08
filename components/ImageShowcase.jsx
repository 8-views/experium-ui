import Image from "next/image";

export default function SectionShowcase({
    heading,
    imageSrc,
    imageAlt = "",
    paragraphs,
    backgroundColor = "bg-white",
}) {
    return (
        <div className={`${backgroundColor}`}>
            <div className="container mx-auto px-4 py-8 md:py-14 lg:py-16">
                <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
                    {/* Header Section */}
                    <div className="text-center">
                        <h2 className="heading">{heading}</h2>
                        <div className="max-w-4xl mx-auto">
                            {paragraphs.map((para, index) => (
                                <p
                                    key={index}
                                    className="para "
                                    dangerouslySetInnerHTML={{ __html: para }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            height={523}
                            width={1080}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
