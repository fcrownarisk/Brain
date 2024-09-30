import 'det1234'
import 'det5678'
import 'det9101112'
import 'one'
import 'oppoone'
import 'pyramid'
import 'square'
import 'antisquare'
import 'antipyramid'
import 'tri'
import 'antitri'
const DET = 'det1234'+'det5678'+'det9101112'
const TRI = 'tri' - 'antitri'
const ONE = 'one' + 'oppoone'
const Square = 'square' * 'antisquare'
 const Pyramid = 'pyramid % antipyramid'
 const DETTRI = 'DET * tri'
 const TRIDET = 'tri % DET'
 const ONEsquare = 'ONE * square'
 const squareONE = 'square % ONE'
 const oppoPyramid = 'antipyramid / pyramid'
 const dimPyramid = 'square - antisquare'
void function SUM(){
    void ['DET/TRI + TRI/DET'=== DETTRI + TRIDET]
    void ['DETtri'+ONEsquare===squareONE+'triDET']
    void [Pyramid === oppoPyramid+dimPyramid]
    return SUM
}
console.log('DETtri','triDET')
console.log(DET,TRI,ONE,Square)
console.log(Pyramid,ONEsquare,squareONE,oppoPyramid,dimPyramid)
