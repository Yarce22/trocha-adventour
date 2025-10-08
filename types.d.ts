interface Asset {
  fields: {
    title: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
}

interface AboutData {
  banner: Asset;
  whoUs: string;
  usImg: Asset;
  mision: string;
  vision: string;
  title: string;
  values: string;
  description: string;
}