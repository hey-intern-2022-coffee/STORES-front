export const INPUTS_FOR_ORDER = [
  {
    name: 'postCode',
    model: '',
    placeholder: 'ハイフン(-)なし　郵便番号'
  },
  {
    name: 'address',
    model: '',
    placeholder: '住所'
  },
  {
    name: 'name',
    model: '',
    placeholder: '宛名'
  },
  {
    name: 'phoneNumber',
    model: '',
    placeholder: '電話番号'
  },
  {
    name: 'email',
    model: '',
    placeholder: 'e-mail アドレス'
  }
]

export const LABELS_ON_CHECKOUT_FORM = {
  title: { title: '注文情報の入力' },
  addressForm: { title: 'お届け先', clearBtn: '全て消す' },
  orderInfo: { title: '注文情報' },
  bottom: { btn: '注文を確定する' }
}
