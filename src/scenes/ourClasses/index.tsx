import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to help you build strength, increase muscle mass, and improve your overall fitness level. Led by experienced trainers, our weight training classes focus on proper form and technique to ensure that you get the most out of your workout while minimizing the risk of injury.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes are the perfect way to de-stress, improve your flexibility, and boost your mental and physical wellbeing. Whether you're a beginner or an experienced yogi, our classes offer a variety of styles and levels to meet your needs. From gentle, restorative yoga to more challenging vinyasa flows, we have something for everyone.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our ab core classes are designed to target your core muscles and help you develop a strong, toned midsection. With a focus on exercises like planks, crunches, and other core-specific moves, our classes will help you improve your posture, balance, and overall core strength.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our adventure classes are perfect for those who want to take their fitness to the next level. Whether you're interested in rock climbing, hiking, or other outdoor activities, our adventure classes offer a fun and challenging way to stay active while exploring the great outdoors.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our fitness classes offer a variety of workouts and styles to help you stay motivated and achieve your fitness goals. From high-intensity interval training (HIIT) to dance-based workouts, our classes are designed to challenge you and keep you engaged.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our training classes offer personalized coaching and guidance to help you achieve your specific fitness goals. Whether you're looking to build muscle, lose weight, or improve your athletic performance, our trainers will work with you to create a custom training program that meets your needs and fits your schedule.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our gym offers a variety of courses designed to help you achieve
              your fitness goals and learn new skills. From nutrition and
              wellness to sports-specific training, our courses are taught by
              experienced trainers and experts in their respective fields. We
              offer both online and in-person courses, so you can choose the
              option that works best for you. Whether you're looking to take
              your fitness to the next level or just want to learn something
              new, our courses are the perfect way to expand your knowledge and
              improve your health and wellbeing.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
