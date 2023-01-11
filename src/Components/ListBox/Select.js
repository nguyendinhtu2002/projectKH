import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { findByStatus } from '../../redux/Actions/ordersAction'

const Status = [
    { name: 'ALL' },
    { name: 'Pending' },
    { name: 'Processing' },
    { name: 'In progress' },
    { name: 'Completed' },
    { name: 'Partial' },
    { name: 'Canceled' },

]

const type = [
    { name: 'Search type' },
    { name: 'Order ID' },
    { name: 'Link' },
    { name: 'Service' },


]
export default function Select() {
    const [selected, setSelected] = useState(Status[0])
    const [selected1, setSelected1] = useState(type[0])
    const [Link, setLink] = useState('')
    const [IDorder, setLink1] = useState('')
    const [link, setLink2] = useState('')
    const [service, setLink3] = useState('')
    if (selected1 === "Order ID") setLink1(Link)
    if (selected1 === "Link") setLink2(Link)
    if (selected1 === "Service") setLink3(Link)

    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(findByStatus(selected))
    // }, [dispatch])
    function handleClickFindByStatus() {
        dispatch(findByStatus(selected.name, IDorder, link, service))

    }
    useEffect(() => {
        if (selected1.name === "Order ID") setLink1(Link)
        if (selected1.name === "Link") setLink2(Link)
        if (selected1.name === "Service") setLink3(Link)
    })
    return (
        <div className='row'>

            <div className=" top-16 col-lg-2">
                <Listbox value={selected} onChange={setSelected} className="mb-5">
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#eef3f7] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="relative lg:absolute mt-1 max-h-60 lg:w-[15%] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {Status.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
            <div className=" top-16 col-lg-2">
                <Listbox value={selected1} onChange={setSelected1} className="mb-5">
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#eef3f7] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected1.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="relative lg:absolute mt-1 max-h-60 lg:w-[15%] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {type.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
            <div className='col-lg-8'>
                <div className='mb-5'>
                    <div className='input-group'>
                        <input type="text" class="form-control form-control-solid ipt-keyword h-[38px] relative flex-auto min-w-0" placeholder="Search" onChange={(e) => setLink(e.target.value)} />
                        <button onClick={handleClickFindByStatus} className='btn btn-primary btn-icon px-4' style={{ height: 38 }}><i class="las la-search fs-2"></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
}
