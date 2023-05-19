import Link from 'next/link'

export const Links = () => {
	
	let links = [
		['/', 'Home'],
		['/promocoes', 'Promoções'],
		['/departamentos', 'Departamentos'],
		['/produtos/colchoes', 'Colchões'],
		['/produtos/eletro', 'Eletro'],
		['/produtos/moveis', 'Móveis'],
		['/produtos', 'Todos os Produtos'],
		['/lojas', 'Lojas'],
		['/fale-conosco', 'Fale Conosco']
	]
	
	return (
		<ul>
			{links.map((item, key) => (
				<li key={key}>
					<Link href={item[0]}>
						{item[1]}
					</Link>
				</li>
			))}
		</ul>
	)
}