import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Button, List, Nav } from "./styles";

import logoWideWhiteImg from "../../assets/logo_wide_white.svg";
import arrowRightImg from "../../assets/arrowRight.svg";

interface MobileMenuModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function MobileMenuModal({
  isOpen,
  onRequestClose,
}: MobileMenuModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Nav className="modal">
        <List>
          <li>
            <Link to="./">Como funciona</Link>
          </li>
          <li>
            <Link to="./">Quem somos</Link>
          </li>
          <li>
            <Link to="./">Parceiros</Link>
          </li>
          <li>
            <Link to="./">Dúvidas</Link>
          </li>
          <li>
            <Link to="./">Blog</Link>
          </li>
          <li>
            <Link to="./" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="./">
              <Button icon={arrowRightImg}>
                <span>Transformar minha carreira</span>
              </Button>
            </Link>
          </li>
        </List>
      </Nav>
    </Modal>
  );
}
