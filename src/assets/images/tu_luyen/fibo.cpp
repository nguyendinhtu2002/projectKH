#include<bits/stdc++.h>
using namespace std;

map <int,long long> a; 

long fibo(long long n){
	if(n==1) return 0;
	auto p=a.find(n);
	if(p!=end(a)) return p->second;
	long long kq=0;
	if(n%2==0) kq= fibo(n/2)+1;
	else kq= fibo(3*n +1)+1;
	a[n]=kq;
	return kq;
	
}

int main(){
	int n;cin>>n;
	cout<<fibo(n);
}
