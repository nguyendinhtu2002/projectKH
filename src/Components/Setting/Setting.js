import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Status = [
    { name: 'ALL' },
    { name: 'Pending' },
    { name: 'Processing' },
    { name: 'In progress' },
    { name: 'Completed' },
    { name: 'Partial' },
    { name: 'Canceled' },

]
function Setting() {
    const [selected, setSelected] = useState(Status[0])

    return (
        <>
            <div className='card mb-5'>
                <div className='card-header'>
                    <div class="card-title"><h3 data-lang="Security">Security</h3></div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div class="mb-5">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-solid ipt-email " style={{ fontSize: 13 }} value="nguyentu@gmail.com" />
                                    <button type="button" class="btn btn-primary" style={{ fontSize: 13 }} >Change email</button>
                                </div>
                            </div>
                            <div class="mb-5">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-solid ipt-api-key" style={{ fontSize: 13 }} value="6cb00**********" disabled="" />
                                    <button type="button" class="btn btn-primary" style={{ fontSize: 13 }}>
                                        <i class="fa fa-refresh" aria-hidden="true">
                                        </i>
                                        API Key
                                    </button>
                                </div>
                            </div>
                            {/* <div class="mb-5">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-2fa" data-lang="Enable 2FA Google Authentication">Enable 2FA Google Authentication</button>
                        </div> */}
                        </div>
                        <div className='col-lg-3'>
                            <div class="mb-lg-0 mb-md-5 mb-sm-5">
                                <label class="form-label" style={{ fontSize: 13 }}>Current password</label>
                                <input type="password" style={{ fontSize: 13 }} class="form-control form-control-solid ipt-current-pass" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="mb-lg-0 mb-md-5 mb-sm-5">
                                <label class="form-label" style={{ fontSize: 13 }}>New password</label>
                                <input type="password" style={{ fontSize: 13 }} class="form-control form-control-solid ipt-current-pass" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="mb-lg-0 mb-md-5 mb-sm-5">
                                <label class="form-label" style={{ fontSize: 13 }}>Confirm password</label>
                                <input type="password" style={{ fontSize: 13 }} class="form-control form-control-solid ipt-current-pass" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <label class="form-label">&nbsp;</label>
                            <div>
                                <button type="button" class="btn btn-primary" style={{ fontSize: 13 }} >Change password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card mb-5'>
                <div class="card-header">
                    <div class="card-title"><h3>Settings</h3></div>
                </div>
                <div className='card-body'>
                    <form className=''>
                        <div class="mb-5">
                            <label class="form-label" >Appearance</label>
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
                                        <Listbox.Options className="relative  mt-1 max-h-60  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                        <div class="mb-5">
                            <label class="form-label" >Currency</label>
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
                                        <Listbox.Options className="relative  mt-1 max-h-60  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                        <div class="mb-5">
                            <label class="form-label" >Timezone </label>
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
                                        <Listbox.Options className="relative  mt-1 max-h-60  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default Setting