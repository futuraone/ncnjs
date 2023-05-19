import Link from 'next/link'
import {Share} from '@/components/Share/Share'
import {Produto as ProdutoTipo} from '@/types/Produto'
import styles from './styles.module.css'
import {Conditional} from '@/components/Conditional/Conditional'

type Props = {
	produto: ProdutoTipo;
}
export const Produto = ({produto}: Props) => {
	
	let path = `/produtos/${produto.grupo}/${produto.subgrupo}/${produto.slug}`
	
	let value = (value: string) => {
		return Number(value.replace('R$', ''))
	}
	
	let sePromocao = (valor: string, valor_promo: string) => {
		return (value(valor_promo) < value(valor))
	}
	return (
		<>
			<div className={styles.produto}>
				<Conditional condition={produto.mostruario}>
					<span className={styles.mostruario}>mostruário</span>
				</Conditional>
				<Share nome={produto.nome} path={path}/>
				<Link href={path} className={styles.link}>
					<img src={produto.imagem} alt="" className={styles.img}/>
					<h2 className={styles.titulo}>{produto.nome}</h2>
					<p className={styles.medidas}>{produto.medidas}</p>
					<p className={styles.codigo}>Código: {produto.id}</p>
					<p>
						{sePromocao(produto.valor, produto.valor_promo) &&
                            <>
                                <del className={styles.precoDe}>
                                    <span>De:</span>
									{produto.valor}
                                </del>
                                <span>Por:</span>
                            </>
						}
						<span className={styles.precoPor}>
							{produto.valor_promo}
						</span>
					</p>
				</Link>
			</div>
		</>
	)
}