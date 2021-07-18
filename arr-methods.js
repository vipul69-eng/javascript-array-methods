class ArrayMethods {
    constructor() { }
    //Sum of array Items
    arr_s = (n) => {
        let s = 0, a = null
        n.map(r => {
            a = s = s + r
        })
        return a
    }
    //array Avg
    arr_avg = (n) => {
        let s = 0, a = null
        n.map(r => {
            a = s = s + r
        })
        return a / n.length
    }
    //Definite Avg
    arr_davg = (n) => {
        let s = 0, a = null
        n.map(r => {
            a = s = s + r
        })
        return Math.round(a / (n.length))
    }
    //Array dec/inc by a constant
    arr_ch = (n, k) => {
        let s = []
        n.map(r => {
            s = s.concat(r - k)
        })
        return s
    }
    //Array Filter
    arr_filter = (n, k) => {
        let s = []
        n.map(r => {
            if (r % k == 0) {
                s = s.concat(r)

            }
        })
        return s
    }
    //Array Pop
    arr_rem = (n, k) => {
        let s = []
        n.map(r => {
            if (r !== n[k]) {
                s = s.concat(r)
            }
        })
        return s
    }
    //remove by value
    arr_remVal = (n, k) => {
        let s = []
        n.map(
            r => {
                if (r !== k) {
                    s = s.concat(r)
                }})
        return s
    }
    //remove by value rev
    arr_remValRev = (n, k) => {
        let s = []
        n.map(
            r => {
                if (r == k) {
                    s = s.concat(r)
                }})
        return s
    }
    //Random id generator
    arr_rand_id=(l,k)=>{
        let s=[]
        for(let i =0;i<l;i++){
            if(k>=4&&k<=36){
            s=s.concat(Math.random().toString(k||4))
            }
            else{
                break;
            }
        }
        return s
    }
    //return even
    arr_even = (n) => {
        let s = []
        n.map(r => {
            if (r % 2 == 0) {
                s = s.concat(r)

            }
        })
        return s
    }
    //return odd
    arr_odd = (n) => {
        let s = []
        n.map(r => {
            if (r % 2 != 0) {
                s = s.concat(r)

            }
        })
        return s
    }
    // strings to ascii
    arr_ascii=(n)=>{
        let s=[]
        n.map(
            r=>{
                s=s.concat(r.charCodeAt(0))
            }
        )
        return s
    }
    //acii to strings
    arr_char=(n)=>{
        let s=[]
        n.map(
            r=>{
                s=s.concat(String.fromCharCode(r))
            }
        )
        return s
    }
    // absolute array
    arr_abs=(n)=>{
        let s=[]
        n.map((r)=>{
            s=s.concat(Math.abs(r))
        })
        return s
    }
    //array to object
    arr_obj=(n)=>{
        let s=[],a=0
        n.map(
            r=>{
                s=s.concat({val:r,id:a})
                a++
            
            }
        )
        return s
    }
    //difference of arr items
    arr_s = (n,start) => {
        let s = 0, a = null
        n.map(r => {
            a = s = s - r
        })
        return a
    }
    //multiplication
    arr_m = (n) => {
        let s = 1, a = null
        n.map(r => {
            a = s = s * r
        })
        return a
    }
    //generator
    arr_gen=(ft,nt,pt)=>{
        let s=[],add=0
        for(let a=0;a<nt;a++){
            s=s.concat(ft+add)
            add+=pt
        }
        return s
    }
    //Sum of array raised to power
    arr_sr = (n,p) => {
        let s = 0, a = null
        n.map(r => {
            a = s = s + Math.pow(r,p)
        })
        return a
    }
    //new arr raised to power
    arr_ar = (n,p) => {
        let s = [], a = null
        n.map(r => {
            a = s = s.concat(Math.pow(r,p))
        })
        return a
    }
    //return div by
    arr_divby = (n,k) => {
        let s = []
        n.map(r => {
            if (r % k == 0) {
                s = s.concat(r)

            }
        })
        return s
    }
    //arr factorial
    arr_fact=(n)=>{
        let s=[],m=1
        n.map(
            r=>{
                for(let a =1;a<=r;a++){
                    m=m*a
                }
                s=s.concat(m)
                m=1
            }
        )
        return s 
    }
    //arr factorial sum
    arr_fact_sum=(n)=>{
        let s=0,m=1
        n.map(
            r=>{
                for(let a =1;a<=r;a++){
                    m=m*a
                }
                s=s+m
                m=1
            }
        )
        return s 
    }
    
}
const arr = new ArrayMethods()
//example

