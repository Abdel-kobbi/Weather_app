import { Button, Form } from "react-bootstrap";


export default function SearchBar() {
    return (
        <Form>
            <Form.Group className="d-flex gap-2">
                <Form.Control size="lg" type="text" placeholder="Enter your city..." />
                <Button variant="primary">Search</Button>
            </Form.Group>
        </Form>
    )
}
