import {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Produto as ProdutoTipo} from '@/types/Produto'
import {Produto as ProdutoIndividual} from '@/components/Produto/Produto'

type Props = {
	endpoint: string;
	token: string;
}

const Infinite = ({endpoint, token}: Props) => {
	
	const [items, setItems] = useState<ProdutoTipo[]>([])
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(1)
	
	const fetchMoreData = async () => {
		let url = `https://apinacional.jvsites.com.br/api${endpoint}?page=${page}`
		
		let config = {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}
		
		const response = await fetch(url, config)
		const newItems = await response.json()
		setPage(page + 1)
		setItems([...items, ...newItems])
	}
	
	return (
		<InfiniteScroll
			dataLength={items.length}
			next={fetchMoreData}
			hasMore={hasMore}
			loader={''}
		>
			<div className="row">
				{items.map((item, index) => (
					<div className="col-md-3" key={index}>
						<ProdutoIndividual produto={item}/>
					</div>
				))}
			</div>
		</InfiniteScroll>
	)
}

export default Infinite
