import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import useSearch from '../hook/useSearch';
import Loading from '../components/ui/Loading';

export default function Search() {
  const { searchText } = useParams();
  const trimedSearchText = searchText.trim();
  const {
    searchQuery: { isLoading, error, data: products },
  } = useSearch(trimedSearchText);

  return (
    <>
      {error && <p>{error}</p>}
      <h2 className='my-6 text-2xl font-bold text-center'>
        '{trimedSearchText}' 검색결과
      </h2>
      {isLoading && <Loading />}
      {products && (
        <ul className='grid grid-cols-2 gap-10 my-6 md:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}
