export type Produto = {
	id: number;
	nome: string;
	imagem: string;
	slug: string;
	grupo: string;
	subgrupo: string;
	medidas: string | null;
	densidade: string | null;
	valor: string;
	valor_promo: string;
	mostruario: boolean
}