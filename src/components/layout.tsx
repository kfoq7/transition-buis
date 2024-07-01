import Head from 'next/head'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Head>
      <title>Mi Aplicación de Mapas</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>{/* Aquí podrías incluir una barra de navegación */}</header>
    <main>{children}</main>
    <footer>{/* Aquí podrías incluir un pie de página */}</footer>
  </div>
)

export default Layout
