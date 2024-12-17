import BaseEntity from "../../@shared/domain/entity/base.entity";
import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import InvoiceItem from "./invoice-item.entity";
import Address from "../../@shared/domain/value-object/address";
import Id from "../../@shared/domain/value-object/id.value-object";

type Props = {
  id?: Id
  name: string
  document: string
  address: Address
  items: InvoiceItem[]
  createdAt?: Date
  updatedAt?: Date
}

export default class Invoice extends BaseEntity implements AggregateRoot {
  private _name: string
  private _document: string
  private _address: Address
  private _items: InvoiceItem[]

  constructor(props: Props) {
    super(props.id, props.createdAt, props.updatedAt);
    this._name = props.name;
    this._document = props.document;
    this._address = props.address;
    this._items = props.items;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get document(): string {
    return this._document;
  }

  set document(value: string) {
    this._document = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get items(): InvoiceItem[] {
    return this._items;
  }

  set items(value: InvoiceItem[]) {
    this._items = value;
  }
}