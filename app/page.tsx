import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Привет, я Иван Гончаров!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Если вы смотрите эту страницу значит вы рассматриваете меня в качестве кандидата на вакансию бекенд разработчик. 
        </p>
        <p>
        За время моей работы приобрел существенный опыт в разработке бекенд приложений для коммерческой 
        и финансовых сфер. Имею способность мыслить алгоритмически и качественно подходить к поставленным
         задачам. Участвовал в разработке проекта правительства для предпринимателей находящихся на особом 
         налоговом режиме.  Приложение взаимодействует с API налоговых органов и крупных банков. 
         Разрабатывал приложение для предприятий работающих в ресторанном бизнесе, приложение взаимодействует
          с API налоговой и крупным поставщиком IT сервисов для баров и ресторанов. Мною была разработана 
          концепция и архитектура бекенд приложения для строительного бизнеса где на базе SaaS приложения 
          происходят бизнес процессы. В бизнес логику приложения включены все стадии строительства от сбора 
          разрешительной документации до введения объектов в эксплуатацию. Мой основной технологический стэк: 
          Python, FastAPI, SQLAlchemy, Docker, так же знаком с Kafka, Django, ApacheAirflow, gRPC, Celery.
          .
        </p>
    
        <p>
          Если у вас возникла необходимость ознакомится с моим резюме, то по этой ссылке вы найдете мою 
          страничку в{" "}
          <a href="https://hh.ru/resume/eeb0fec4ff0ded24490039ed1f73365749456d">HeadHunter</a>.
        </p>
        <p>
          Если понадобится мой репозиторий в{" "}
          <a href="https://github.com/ivanIStereotekk" target="_blank">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
