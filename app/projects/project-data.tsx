export interface Project {
    title: string;
    year: number;
    description: string;
    url: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Gestures Detection, Ableton Live & MIDI, Computer Vision",
      year: 2023,
      description:
        "Время от времени я пробую разные технологии. Мини проект. Я переобразовал hand landmarks data в MIDI сигнал. Далее сигнал к аблетону... и это звучит! Конечно проект требует развития, но все же на мой взгляд очень интересный проект. Ну или прототип проекта. Буду продолжать его по мере возможности!",
      url: "https://youtu.be/wMKDv2Fauus",
    },
    {
      title: "Computer Brain Interface в MIDI с headset  от Emotive",
      year: 2022,
      description:
        "Идея получения сигналов с интерфейса \"мозг-компьютер\" мне очень нравится, и в этом направлении много интересных проектов. Думаю Kernel самый серьезный представитель в на молодом рынке интерфейсов. В обозримом будущем хочу получить SDK + набор который поможет видеть данные о нейронной активности мозга, и как один из возможных вариантов переобразовывать эти данные в MIDI, хотя технология не граничивается только этим.",
      url: "https://www.kernel.com/products",
    },
    {
      title: "Микросервисы - Разделяй и влавствуй !",
      year: 2021,
      description:
        "Возможно кто то уже приходил к такой концепции разработки микросервисов, уверен я не первый. Абсолютно уверен, дробить монолит имеет смысл, и вот почему...",
      url: "http://ivanistereotekk.github.io/blog/granular-micro",
    },
  ];