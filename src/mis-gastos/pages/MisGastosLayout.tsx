import { Navbar } from '../ui';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MisGastosLayout = ({children}: Props) => {
  return (
    <>
        <Navbar />
        <main className="container">
            {
                children
            }
        </main>
    </>
  )
}
