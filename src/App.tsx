import * as React from 'react';
import SidebarMenu from './components/SidebarMenu';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  let menu = ["Chamados", "Gestão de usuários", "Ordens de serviço", "Minha página"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
          <SidebarMenu menu={menu} heading="Cities" onSelectItem={handleSelectItem} />
      </React.Fragment>
    </div>
  );
}

export default App;