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
