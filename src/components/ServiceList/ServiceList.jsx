import ServiceItem from "../ServiceItem/ServiceItem";
import individualApproach from "../../images/individual_approach.png";
import controll from "../../images/controll.png";
import realInterest from "../../images/real_interest.png";
import saveMoney from "../../images/save_money.png";
import speedFlexible from "../../images/speed_flexible.png";

const ServiceList = () => {
  const services = [
    {
      imageUrl: individualApproach,
      title: "Индивидуальный подход",
      description:
        "В отличие от больших компаний, я сосредотачиваюсь на каждом клиенте. Вы не будете одним из множества проектов, я уделяю максимум внимания вашим задачам и особенностям. Подстроюсь под ваши требования, будь то сроки, бюджет или уникальный подход.",
    },
    {
      imageUrl: speedFlexible,
      title: "Гибкость и скорость",
      description:
        "Меньше бюрократии — быстрее результаты. Большие компании часто имеют сложные процессы согласования, что замедляет работу. Я могу быстро адаптироваться к изменениям в проекте и оперативно внедрять ваши пожелания.",
    },
    {
      imageUrl: controll,
      title: "Прозрачность и контроль",
      description:
        "Вы работаете напрямую со мной, без посредников. Я сам занимаюсь всей разработкой, от идеи до реализации. Вы всегда знаете, на каком этапе находится проект, и можете лично влиять на процесс.",
    },
    {
      imageUrl: saveMoney,
      title: "Экономия бюджета",
      description:
        "Я предлагаю качественные решения без дополнительных затрат. Большие компании включают в стоимость накладные расходы (офисы, зарплаты менеджеров). Моя цена — это оплата только за реальную работу, а не за бренд.",
    },
    {
      imageUrl: realInterest,
      title: "Настоящая заинтересованность",
      description:
        "Для меня ваш успех — это моя репутация. Я заинтересован в том, чтобы ваш проект был успешным, так как это мой главный источник рекомендаций и новых клиентов. Каждый проект — это возможность показать мой профессионализм и создать что-то выдающееся.",
    },
  ];

  return (
    <div className="services-section">
      {services.map((service, index) => (
        <ServiceItem
          imageUrl={service.imageUrl}
          key={index}
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
    </div>
  );
};
export default ServiceList;
