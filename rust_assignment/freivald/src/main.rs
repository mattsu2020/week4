extern crate rand;
use rand::Rng;
fn main() {
	let a: [[i32; 2]; 2] = [[1,1],[1,1]];
	let b: [[i32; 2]; 2] = [[1,1],[1,1]];
	let c: [[i32; 2]; 2] = [[2,2],[2,1]];
	println!("{}", isProduct(&a,&b,&c,2));
}

fn isProduct(a: &[[i32; 2]; 2],b: &[[i32; 2]; 2], c: &[[i32; 2]; 2], k: u32) -> bool{
	for i in 0..k {
		if freivald(&a,&b,&c) == false {
			return false
		}
	}
	return true
}

fn freivald(a: &[[i32; 2]; 2],b: &[[i32; 2]; 2], c: &[[i32; 2]; 2])->  bool {
	let mut rng = rand::thread_rng();
	const N: usize = 2;
	//let a: [[i32; 2]; 2] = [[1,1],[1,1]];
	//let b: [[i32; 2]; 2] = [[1,1],[1,1]];
	//let c: [[i32; 2]; 2] = [[2,2],[2,1]];
	//r = [0] * N
	//let r: [i32; N] = [0; N];
	//let r:  [[i32; N]; N]  = [[0; N]; N];
	let mut r:  [i32; N] = [0; N];
	
	for i in 0..r.len(){
		//r[i] = rng.gen_range(0..509090009) % 2  
		r[i] = rand::thread_rng().gen_range(1..509090009) % 2 ;
		println!("{}",r[i]);
	}
	
	let mut br:  [i32; N] = [0; N];
	for i in 0..N {
		for j in 0..N {
			br[i] = br[i] + b[i][j] * r[j];
		}
	}

        let mut cr:  [i32; N] = [0; N];
        for i in 0..N {
                for j in 0..N {
                        cr[i] = cr[i] + c[i][j] * r[j];
                }
        }

        let mut axbr:  [i32; N] = [0; N];
        for i in 0..N {
                for j in 0..N {
                        axbr[i] = axbr[i] + a[i][j] * br[j];
                }
        }
        for i in 0..N {
		if axbr[i] - cr[i] != 0 {
			return false;
		}
	}
	return true;
}
