'use client';
import SearchBar from "../SearchBar/SearchBar"
import Button from "../Buttons/Button"

const sectionButtons = 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';


export default function Header() {
  return (
    <div
        className='rounded-lg border-2 border-gray-400 m-2'
    >
        <SearchBar />
        <div
            className="flex justify-center space-x-4 items-center py-3"
        >
            <Button
                name="Home"
                className={sectionButtons}
                clicking={() => console.log('entrar')}
            />
            <Button 
                name='Módulos'
                className={sectionButtons}
                clicking={() => console.log('entrar')}
            />
            <Button 
                name='Outros possiveis botões'
                className={sectionButtons}
                clicking={() => console.log('entrar')}
            />
            <Button 
                name='Contato'
                className={sectionButtons}
                clicking={() => console.log('entrar')}
                />
        </div>      
    </div>
  )
}
