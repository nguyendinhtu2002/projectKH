#include<bits/stdc++.h>
using namespace std;

int m,n;
int a[1000],kq=0,t=0;
map<int,int> tmp;
void print(int k){
	for(int i=0;i<k;i++) cout<<a[i]<<" ";
	cout<<endl;
}
void f(int i){
	if(t>m){
		print(i);
		kq++;
		return;
	}
	for(;i<n;i++){
		t+=a[i];
		f(i+1);
		t-=a[i];
	}
}

int main(){
	cout<<"Nhap m = ";cin>>m;
	cout<<"Nhap n = ";cin>>n;
	for(int i=0;i<n;i++){
		cout<<"a["<<i<<"] = ";cin>>a[i];
	}
	f(0);
	cout<<"Co tat ca "<<kq<<" cach phan tich.";
}
