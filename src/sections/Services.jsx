import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <Fade key={service.label} direction="left" delay={index * 100} duration={2500}>
        <ServiceCard key = {service.label}
        {...service} />
        </Fade>
      ))}
    </section>
  )
}

export default Services