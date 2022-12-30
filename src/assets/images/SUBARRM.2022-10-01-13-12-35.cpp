#include <iostream>
#include <algorithm>
using namespace std;
const int MAX = 100;
int a[MAX],b[MAX],k,n,t=0,dem=0;

void gen(int i)
{
    if (t>=k)
    {
        if (t>k)
            dem++;
        return;
    }
    for (; i < n; i++)
    {
        t += a[i];
        gen(i + 1);
        t -= a[i];
    }
}
int main()
{
    cin>>k>>n;
    for(int i =0;i<n;i++) cin>>a[i];
    gen(0);
	cout<<dem;
    return 0;
}
