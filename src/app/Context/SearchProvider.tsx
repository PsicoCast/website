import { useMemo, useState, useEffect } from 'react';
import SearchContext from './SearchContext';

function HeaderProvider({ children }: any) {
    const [ search, setSearch ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ type, setType ] = useState('');
    const [allFromFetch, setAllFromFetch] = useState([]);
    const [flag, setFlag] = useState('generic');
    const [materialFromFetch, setMaterialFromFetch] = useState([]);
    
  
    const value = useMemo(() => ({
      search,
      setSearch,
      category,
      setCategory,
      type,
      setType,
      allFromFetch,
      setAllFromFetch,
      flag,
      setFlag,
      materialFromFetch, 
      setMaterialFromFetch
    }), [
        search,
        setSearch,
        category,
        setCategory,
        type,
        setType,
        allFromFetch,
        setAllFromFetch,
        flag,
        setFlag,
        materialFromFetch, 
        setMaterialFromFetch
    ]);
  
  
    return (
      <SearchContext.Provider value={ value }>
        { children }
      </SearchContext.Provider>
    );
  }
  
  export default HeaderProvider;
