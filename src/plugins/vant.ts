import { 
  Button,
  Cell,
  CellGroup,
  Checkbox,
  Icon,
  Field
} from 'vant';

export default function (app: any) {
  app.use(Button);
  app.use(CellGroup);
  app.use(Cell);
  app.use(Checkbox);
  app.use(Icon);
  app.use(Field);
}