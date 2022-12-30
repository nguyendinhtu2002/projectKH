#include <iostream>
using namespace std;

int main() {
	long long f0 = 0, f1 = 1, fn  = 0;
	long long k;
	cin >> k;
	
	if (k < 0) {
		cout << 0;
		return 0;
	}
	
	while (fn <= k) {
		fn = f0 + f1;
		f0 = f1;
		f1 = fn;
	}
	
	cout << fn;
	return 0;
}
