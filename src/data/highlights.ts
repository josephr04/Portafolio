import { FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';

export const highlights = [
  {
    icon: FaCode,
    titleKey: "about.highlight.cleanCode.title",
    descriptionKey: "about.highlight.cleanCode.description"
  },
  {
    icon: FaLaptopCode,
    titleKey: "about.highlight.fullStack.title",
    descriptionKey: "about.highlight.fullStack.description"
  },
  {
    icon: FaRocket,
    titleKey: "about.highlight.fastLearner.title",
    descriptionKey: "about.highlight.fastLearner.description"
  },
  {
    icon: FaUsers,
    titleKey: "about.highlight.teamPlayer.title",
    descriptionKey: "about.highlight.teamPlayer.description"
  }
] as const;