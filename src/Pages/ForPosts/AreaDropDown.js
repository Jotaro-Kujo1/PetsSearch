import {Dropdown} from "react-bootstrap";


export const AreaDropDown = () => {
    const handleReload = () => {
        window.location.reload();
    }

    const updateStorage = (str) => {
        localStorage.setItem('area',str);
        handleReload();
    }

    return(
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Choose Area
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
                <Dropdown.Item onClick={() => updateStorage('Все')}>
                    Все
                </Dropdown.Item>

                <Dropdown.Item onClick={() => updateStorage('Заягорбский')}>
                    Заягорбский
                </Dropdown.Item>

                <Dropdown.Item onClick={() => updateStorage('Зашекснинский')}>Зашекснинский</Dropdown.Item>

                <Dropdown.Item onClick={() => updateStorage('Северный')}>Северный</Dropdown.Item>

                <Dropdown.Item onClick={() => updateStorage('Индустриальный')}>Индустриальный</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}