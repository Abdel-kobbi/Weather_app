import { Button, Form } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
    return (
        <Form>
            <Form.Group className="d-flex gap-2">
                <Form.Control className={styles.searchInput} size="lg" type="text" placeholder="Enter your city..." />
                <Button variant="primary">Search</Button>
            </Form.Group>
        </Form>
    )
}
