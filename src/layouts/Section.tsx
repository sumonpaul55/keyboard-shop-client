import { ReactNode } from "react"


const Section = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <section className={`py-8 md:py-20  px-2 md:px-0 ${className}`}>
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
}

export default Section