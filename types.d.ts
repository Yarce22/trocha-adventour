interface ContentfulEntry<T> {
  sys: {
    id: string;
  };
  fields: T;
}

interface Asset {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
}

interface Value {
  fields: {
    title: string;
    description: string;
  };
}

interface AboutData {
  banner: Asset;
  whoUs: string;
  usImg: Asset;
  mision: string;
  vision: string;
  title: string;
  values: Value[];
  valuesDescription: string;
}

interface HeroImg {
  title: string;
  subtitle: string;
  description: string;
  img: Asset;
}

interface Route {
  id: string,
  title: string,
  description: string,
  description2: string,
  difficulty: string,
  time: string,
  tourImages: Asset[],
  characteristics: string[],
  step1: string,
  step2: string,
  step3: string,
  imgStep1: Asset,
  imgStep2: Asset,
  imgStep3: Asset,
  imgEnding: Asset,
}

interface Routes {
  id: string,
  banner: Asset,
  title: string,
  description: string,
  routes: Route[],
}

interface Ally {
  name: string,
  description: string,
  logo: Asset,
  url: string,
}
