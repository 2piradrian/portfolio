import Image from "next/image";

type Props = {
	tech: string;
};

export default function Tech({ tech }: Props) {
	const getImagePath = (imageName: string) =>
		require(`../../assets/techs/${imageName}.svg`).default;

	switch (tech) {
		case "JS":
			return <Image src={getImagePath("javascript")} alt="" />;
		case "TS":
			return <Image src={getImagePath("typescript")} alt="" />;
		case "REACT":
			return <Image src={getImagePath("react")} alt="" />;
		case "REDUX":
			return <Image src={getImagePath("redux")} alt="" />;
		case "KOTLIN":
			return <Image src={getImagePath("kotlin")} alt="" />;
		case "JAVA":
			return <Image src={getImagePath("java")} alt="" />;
		case "SPRINGBOOT":
			return <Image src={getImagePath("springboot")} alt="" />;
		case "COMPOSE":
			return <Image src={getImagePath("compose")} alt="" />;
		case "FIREBASE":
			return <Image src={getImagePath("firebase")} alt="" />;
		case "NODEJS":
			return <Image src={getImagePath("nodejs")} alt="" />;
		case "EXPRESS":
			return <Image src={getImagePath("express")} alt="" />;
		case "MONGODB":
			return <Image src={getImagePath("mongodb")} alt="" />;
		case "POSTGRESQL":
			return <Image src={getImagePath("postgresql")} alt="" />;
		default:
			return <span>{tech}</span>;
	}
}
